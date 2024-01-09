function Calculate() {
    // get the values from input box
    var width = document.getElementById('txtWidth').value;
    var height = document.getElementById('txtHeight').value;
    // border values
    var borderLeft = document.getElementById('txtBorderLeft').value;
    var borderRight = document.getElementById('txtBorderRight').value;
    var borderTop = document.getElementById('txtBorderTop').value;
    var borderBottom = document.getElementById('txtBorderBottom').value;
    // margin values
    var marginLeft = document.getElementById('txtMarginLeft').value;
    var marginRight = document.getElementById('txtMarginRight').value;
    var marginTop = document.getElementById('txtMarginTop').value;
    var marginBottom = document.getElementById('txtMarginBottom').value;
    // padding values
    var paddingLeft = document.getElementById('txtPaddingLeft').value;
    var paddingRight = document.getElementById('txtPaddingRight').value;
    var paddingTop = document.getElementById('txtPaddingTop').value;
    var paddingBottom = document.getElementById('txtPaddingBottom').value;

    // formulas of calculation
    var calculateWidth = Number(width)
        + Number(borderLeft) + Number(borderRight)
        + Number(marginLeft) + Number(marginRight)
        + Number(paddingLeft) + Number(paddingRight);

    var calculateHeight = Number(height)
        + Number(borderTop) + Number(borderBottom)
        + Number(marginTop) + Number(marginBottom)
        + Number(paddingTop) + Number(paddingBottom);

    //Display values
    document.getElementById('spWidth').textContent = width;
    document.getElementById('spHeight').textContent = height;
    //border values reflect
    document.getElementById('spBorderLeft').textContent = borderLeft;
    document.getElementById('spBorderRight').textContent = borderRight;
    document.getElementById('spBorderTop').textContent = borderTop;
    document.getElementById('spBorderBottom').textContent = borderBottom;
    //margin values reflect
    document.getElementById('spMarginLeft').textContent = marginLeft;
    document.getElementById('spMarginRight').textContent = marginRight;
    document.getElementById('spMarginTop').textContent = marginTop;
    document.getElementById('spMarginBottom').textContent = marginBottom;
    //padding values reflect  
    document.getElementById('spPaddingLeft').textContent = paddingLeft;
    document.getElementById('spPaddingRight').textContent = paddingRight;
    document.getElementById('spPaddingTop').textContent = paddingTop;
    document.getElementById('spPaddingBottom').textContent = paddingBottom;
    //Calculate the total size of box
    document.getElementById('spTotalHeight').textContent = calculateHeight;
    document.getElementById('spTotalWidth').textContent = calculateWidth;

    return false;
}